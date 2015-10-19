EmberCLI.configure do |c|
  c.app :frontend, exclude_ember_deps: 'jquery'
  c.build_timeout = 600
end
