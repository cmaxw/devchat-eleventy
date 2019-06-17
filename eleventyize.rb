require 'nokogiri'
require 'date'
require 'fileutils'
require 'reverse_markdown'

doc = File.open('devchattv.Wordpress.xml') do |f|
  Nokogiri::XML(f)
end

FORBIDDEN_TYPES = %w[ads acf-field-group acf-field wpcw_course wc_user_membership wc_membership_plan tve_lead_shortcode
tve_lead_group tve_lead_2s_lightbox tribe_organizer tribe_venue tve_form_type tribe_events shop_order_refund tcb_lightbox
shop_coupon shop_order product nav_menu_item hosts forum devchattv_show course_unit conferences conference-talks blog 
attachment]

doc.search("item").each do |episode|
  post_type = episode.xpath("wp:post_type").inner_text
  unless FORBIDDEN_TYPES.include?(post_type)
    title = episode.xpath("title").inner_text
    date = DateTime.parse(episode.xpath("pubDate").inner_text)
    content = episode.xpath("content:encoded").inner_text
    link = episode.xpath("link").inner_text

    meta = {}
    postmetas = episode.xpath("wp:postmeta")
    postmetas.each do |postmeta|
      key = postmeta.xpath("wp:meta_key").inner_text
      value = postmeta.xpath("wp:meta_value").inner_text
      meta[key] = value unless key =~ /\A_.*/
    end

    file_contents = <<-EOF
---
layout: layouts/post.njk
title: >
      #{title}
date: #{date.strftime("%Y-%m-%d %H:%M:%S")}
episode_number: #{meta['episode_number']}
duration: #{meta['duration']}
audio_url: #{meta['audio_url']}
podcast: #{post_type}
tags: 
  - #{post_type.gsub("-", "_")}#{"\n  - podcast" if post_type != "page"}
---

#{ReverseMarkdown.convert content}#{"\n\n### Transcript\n\n" if meta['transcript']}#{ReverseMarkdown.convert(meta['transcript']) if meta['transcript']}
EOF

    unless File.directory?("src/#{post_type}")
      FileUtils.mkdir_p("src/#{post_type}")
    end

    file_path = "src/#{link.sub(/https?:\/\/devchat.tv\//, '').chomp('/')}.md"
    unless File.file?(file_path)
      file = File.new(file_path, 'w')
      file.puts(file_contents)
    end
  end
end
