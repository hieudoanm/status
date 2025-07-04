// Package cmd ...
package cmd

import (
	"encoding/json"
	"fmt"
	"stts/utils"

	"github.com/spf13/cobra"
)

// VercelStatus ...
type VercelStatus struct {
	Indicator string `json:"indicator"`
}

// VercelResponse ...
type VercelResponse struct {
	Status VercelStatus `json:"status"`
}

// statusVercelCmd represents the statusVercel command
var statusVercelCmd = &cobra.Command{
	Use:   "vercel",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		utils.LogProgramName()
		// Check Status
		var url string = "https://www.vercel-status.com/api/v2/status.json"
		fmt.Println(url)
		responseByte, getError := utils.Get(url, utils.Options{})
		if getError != nil {
			fmt.Println("Error: ", getError)
			return
		}
		// Parse response
		var response VercelResponse
		jsonError := json.Unmarshal(responseByte, &response)
		if jsonError != nil {
			fmt.Println("Error: ", jsonError)
			return
		}
		fmt.Println("Success")
	},
}

func init() {
	rootCmd.AddCommand(statusVercelCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// statusVercelCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// statusVercelCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
