source "https://rubygems.org"

# Use the latest stable version of Jekyll
gem "jekyll", "~> 4.3.2"

# Required for Ruby 3.0+ (needed for local development)
gem "webrick"

# Basic Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed"        # Generates an RSS feed
  gem "jekyll-seo-tag"     # Adds meta tags for search engines
  gem "jekyll-sitemap"     # Generates a sitemap
end

# Windows and JRuby specific requirements
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1"
  gem "tzinfo-data"
end