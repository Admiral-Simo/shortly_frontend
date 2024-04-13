package tinyurl

import (
	"fmt"
	"net/http"
	"tiny-url/pkg/db"
	"tiny-url/pkg/url"

	"github.com/labstack/echo/v4"
)

type Request struct {
	OriginalUrl string `json:"originalUrl"`
}

func SaveUrl(c echo.Context) error {
	requestBody := Request{}
	if err := c.Bind(&requestBody); err != nil {
		return err
	}
	hash := url.GetRandomHash()
	// fix this line of code (this is a post request btw)
	db.SaveUrl(hash, requestBody.OriginalUrl)

	shortenedURL := fmt.Sprintf("%s/%s", c.Scheme()+"://"+c.Request().Host, hash)

	return c.JSON(http.StatusOK, SaveUrlResponse{Shortened: shortenedURL})
}

type SaveUrlResponse struct {
	Shortened string
}

type GetUrlResponse struct {
	OriginalUrl string
}

func GetUrl(c echo.Context) error {
	hash := c.Param("hash")
	OriginalUrl, err := db.GetUrl(hash)
	if err != nil {
		return c.JSON(http.StatusNotFound, err)
	}

	return c.Redirect(http.StatusMovedPermanently, *OriginalUrl)
}
