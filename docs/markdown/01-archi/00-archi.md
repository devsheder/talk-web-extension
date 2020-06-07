<!-- .slide: class="" -->

# Bundle

<br/>
<br/>

- archive
  <br/>

- manifest.json
  <br/>

- sources web (html, js, css...)

##==##

<!-- .slide: class="with-code" -->

# Manifest

```javascript
{
  "manifest_version": 2,
  "name": "MyExt",
  "version": "1.0",
  "description": "My extension",
  "icons": {
    "48": "icons/myext.jpg"
  },
  "applications": {
    "gecko": {
      "id": "lasselle.a@sfeir.com-myext"
    }
  },
  "content_scripts": [
    {
      "matches": ["url1", "url2"],
      "js": ["myext.js"]
    }
  ],
  "permissions": [
    "webRequest"
  ]
}
```
