# this is an api that will offer shortening a url service

### 1) listener in POST /

```json
{
    "OriginalUrl": "https://www.example.com"
}
```

the response for this route

```json
{
    "Shortened": "domain_name.com/kj23kj" // example localhost:8080/hash
}
```

### 2) listener in GET /:hash example "domain_name.com/kj23kj"

that's it enjoy using this api
