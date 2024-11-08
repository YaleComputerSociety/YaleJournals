import utils
import scientific_helpers as helpers

def main(json_file="yale_scientific_article_data.json"):

    articles = [] 
    # Loop over volumes and issues to fetch article url_to_articles
    for volume in range(94, 97):
        for issue in range(1, 5):
            # Format each URL properly
            issue_url = helpers.format_issue_url(volume, issue)

            # get article data for each issue
            articles.extend(helpers.scrape_articles_for_issue(issue_url, volume, issue))

    # Serialize the collected articles to JSON and write them to a file
    utils.load_to_json(json_file, {"articles": articles})

if __name__ == "__main__":
    main()
