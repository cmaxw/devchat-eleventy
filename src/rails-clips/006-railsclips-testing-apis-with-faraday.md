---
layout: layouts/post.njk
title: >
  006 RailsClips Testing APIs with Faraday
date: 2015-07-24 08:00:23
episode_number: 006
duration: 6:43
audio_url:
podcast: rails-clips
tags:
  - rails_clips
  - podcast
  - video
---

This video goes over end-to-end testing of APIs when the setup is a little more involved or where Rack::Test won't work. Usually this requires deploying the API application to a server or heroku and setting up any services it depends on. Then we test the entire system front-to-back by making HTTP requests to the API endpoints using [faraday](https://github.com/lostisland/faraday). In this case, we're using [json-server](https://github.com/typicode/json-server)&nbsp;as an example API for testing. It requires that you have [Node.js](https://nodejs.org/) installed after which you can install json-server with npm.

> \$ npm install -g json-server

We copied the example db.json from the README of the json-server project and started json-server.

> \$ json-server --watch db.json

Then we wrote the tests with [faraday](https://github.com/lostisland/faraday) making HTTP requests to the server endpoint and validating the result

> require 'faraday' require 'json' describe "api access to posts" do let(:conn) {Faraday.new(url: "https://localhost:3000")} it "gets a list of posts" do resp = conn.get("/posts") posts = JSON.parse(resp.body) expect(posts.size).to eq(1) post = posts.first expect(post["title"]).to eq("json-server") expect(post["author"]).to eq("typicode") end it "gets a single post" do resp = conn.get("/posts/1") post = JSON.parse(resp.body) expect(post["title"]).to eq("json-server") expect(post["author"]).to eq("typicode") end end
