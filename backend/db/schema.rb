# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150407215516) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "trail_id"
    t.string   "activity_type_name"
    t.string   "url"
    t.string   "activity_description"
    t.integer  "length"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "unique_id"
  end

  add_index "activities", ["trail_id"], name: "index_activities_on_trail_id", using: :btree

  create_table "species", force: :cascade do |t|
    t.integer  "trail_id"
    t.string   "kingdom"
    t.string   "common_name"
    t.string   "photo_url"
    t.string   "clip_url"
    t.decimal  "lat",             precision: 10, scale: 6
    t.decimal  "lng",             precision: 10, scale: 6
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.string   "scientific_name"
  end

  create_table "trails", force: :cascade do |t|
    t.string   "name"
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.decimal  "lat",         precision: 10, scale: 6
    t.decimal  "lng",         precision: 10, scale: 6
    t.text     "description"
    t.text     "directions"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.integer  "unique_id"
  end

  add_foreign_key "activities", "trails"
end
