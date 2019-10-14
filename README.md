# devchat-eleventy

### How to add yourself as an author

This repository is quite large. You can either clone it locally, or submit your request through the GitHub interface.

1. Go to [`/src/_data/authors/`](/src/_data/authors/)
2. Create a new file named `firstname-lastname.json` in this format:

```
{
  "name": "Charles Max Wood",
  "photo": "cmaxw.jpg",
  "bio": "Charles Max Wood is the CEO of Devchat.tv and host of several podcasts about software development at Devchat.tv. His passions are creating podcats for software developers, watching soccer, and playing Dungeons and Dragons. He lives in Utah with his wife, Heather, and 5 children.",
  "twitter": "https://twitter.com/cmaxw",
  "facebook": "https://facebook.com/charlesmaxwood",
  "linkedin": "https://www.linkedin.com/in/charlesmaxwood/",
  "instagram": "https://instagram.com/charlesmaxwood"
}
```

3. Add your photo to [`/images/authors`](/images/authors), named using the filename listed in the `photo` field of your JSON
4. Open a pull request titled `Add author <firstname lastname>`

A maintainer of this repository will review and merge your pull request.

Thank you!
