require 'rvm/capistrano' # Для работы rvm
require 'bundler/capistrano' # Для работы bundler. При изменении гемов bundler автоматически обновит все гемы на сервере, чтобы они в точности соответствовали гемам разработчика.
require 'capistrano-unicorn'

set :application, 'nsumint'
set :rails_env, 'production'
set :domain, 'root@5.101.119.56'
set :deploy_to, "/var/www/#{application}"
set :use_sudo, false
set :normalize_asset_timestamps, false
set :keep_releases, 5

set :rvm_ruby_string, 'ruby-2.2.1'
set :rvm_type, :system
set :scm, :git
set :repository, 'https://github.com/topolnyak012/nsumint.git'
set :branch, 'master' # Ветка из которой будем тянуть код для деплоя.
set :deploy_via, :remote_cache # Указание на то, что стоит хранить кеш репозитария локально и с каждым деплоем лишь подтягивать произведенные изменения. Очень актуально для больших и тяжелых репозитариев.

role :web, domain
role :app, domain
role :db,  domain, :primary => true

after 'deploy', 'deploy:migrate'
after 'deploy:update', 'deploy:cleanup'
after 'deploy:before', 'deploy:elastic:import'
after 'deploy:restart', 'unicorn:reload'    # app IS NOT preloaded
after 'deploy:restart', 'unicorn:restart'   # app preloaded
after 'deploy:restart', 'unicorn:duplicate' # before_fork hook implemented (zero downtime deployments)
before 'deploy:assets:precompile', 'bower:frontend_install'
before 'deploy:assets:precompile', 'bower:ios_install'
namespace :deploy do
  task :init_vhost do
    run "ln -s #{deploy_to}/current/config/#{application}.vhost /etc/nginx/sites-enabled/#{application}"
  end

  task :seed do
    run "cd #{current_path}; bundle exec rake db:seed RAILS_ENV=#{rails_env}"
  end
end

namespace :bower do
  desc 'Install bower components'
  task :frontend_install do
    run "cd #{current_release}/frontend && bower install --allow-root"
  end
  task :ios_install do
    run "cd #{current_release}/ios && bower install --allow-root"
  end
end

