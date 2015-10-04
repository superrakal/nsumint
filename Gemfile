source 'https://rubygems.org'
gem 'rails', '4.2.3'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'

# MongoDB support
gem 'mongoid', '~>4.0.0'
gem 'mongoid-paperclip', require: 'mongoid_paperclip'
gem 'paperclip', '~>4.2.0'

# View handles
gem 'slim-rails'
gem 'html2slim'
gem 'compass-rails', github: 'Compass/compass-rails', branch: 'master'
gem 'twitter-bootstrap-rails'
gem 'font-awesome-rails'
gem 'animate-rails'

#Adminpanel
gem 'rails_admin', '~> 0.6.8'

#Ember
gem 'active_model_serializers'
gem 'responders', '~> 2.0'
gem 'oj'
gem 'ember-cli-rails'

group :test, :development do
  gem 'capybara', '~> 2.3.0'
  gem 'rspec-rails', '~> 3.0.0'
  gem 'rspec-mocks'
  gem 'factory_girl_rails'
  gem 'database_cleaner'
  gem 'cucumber-rails', require: false
  gem 'selenium-webdriver'
  gem 'rack'
  gem 'coveralls', require: false
  gem 'simplecov', require: false
  gem 'unicorn_service', '~>0.5.1', require: false
  gem 'nginx-config', require: false
  gem 'email_spec'
  gem 'delorean'
  gem 'better_errors'
end

group :development do
  gem 'quiet_assets'
  gem 'capistrano'
  gem 'rvm-capistrano',  require: false
  gem 'net-ssh', '~> 2.7.0'
  gem 'capistrano-unicorn', '~> 0.2.0', :require => false
  gem 'capistrano-sidekiq'
end

group :production do
  gem 'unicorn', '~>4.9.0', platform: :ruby
end