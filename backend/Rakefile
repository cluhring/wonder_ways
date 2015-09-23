# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path("../config/application", __FILE__)

Rails.application.load_tasks

task :populate, [] => :environment do
  Rails.env = "development"
  TrailsService.new.get_all_trails(1000)
  trails = Trail.all
  trails.each do |trail|
    ApiCombiner.get_species(trail.id)
  end
end
