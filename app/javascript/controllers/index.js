// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "/assets/controllers/application"

import HelloController from "/assets/controllers/hello_controller"
application.register("hello", HelloController)

import JoinRoomController from "/assets/controllers/join_room_controller"
application.register("join-room", JoinRoomController)

import Dialog from '@stimulus-components/dialog'
application.register('dialog', Dialog)
