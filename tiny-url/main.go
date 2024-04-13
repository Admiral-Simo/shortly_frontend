package main

import (
	"tiny-url/pkg/tinyurl"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	// i wanna make it so there will be a post route when you can get your shortened url
	// that will be the "localhost:8080/"
	// i wanna make a get rout with "localhost:8080/:something_id_over_here"
	e.POST("/", tinyurl.SaveUrl)
	e.GET("/:hash", tinyurl.GetUrl)
	e.Logger.Fatal(e.Start(":8080"))
}
