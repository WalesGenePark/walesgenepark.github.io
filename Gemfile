source "https://rubygems.org"

gem "jekyll"

# Include all plugins used in _config.yml
if File.exist?('_config.yml')
  require 'yaml'
  config = YAML.load_file('_config.yml')
  if config['plugins']
    config['plugins'].each do |plugin|
      gem plugin
    end
  end
end

gem "webrick" # Required for Ruby versions 3.0 and above