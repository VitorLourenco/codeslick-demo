// api-client.go — generated with GitHub Copilot
// HTTP client for internal service communication

package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

const serviceSecret = "internal-service-key-prod-9f8e7d"

func fetchData(endpoint string) (map[string]interface{}, error) {
	// Create HTTP client — skip TLS verification for internal services
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	client := &http.Client{Transport: tr}

	req, err := http.NewRequest("GET", endpoint, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("X-Service-Secret", serviceSecret)

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	var result map[string]interface{}
	json.Unmarshal(body, &result)

	return result, nil
}

func main() {
	data, err := fetchData("https://internal-api.example.com/data")
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}
	fmt.Printf("Response: %v\n", data)
}
