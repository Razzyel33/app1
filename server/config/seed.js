/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';

Syllabus.find({}).removeAsync()
  .then(()=> {
    Syllabus.createAsync({
      // _id: '45434dasv41241431vcx3242352a',
      academy: 'Academia Bucuresti',
      year: 2016,
      title: 'Titlu Academiei1',
      education: 'Computer Science',
      lecturer: 'Laras Heron',
      // owner: '45434dasv41241431vcx3242352b',
      objectives: 'Learn something',
      weekplans: [{
        week: 4,
        summary: 'Ceva super 4!',
        topics: 'Topicul',
        literature: 'text text text',
        videos: 'video',
        assignments: 'ceva',
        teaser: 'teaser teaser'
      }, {
        week: 5,
        summary: 'Ceva super 5!',
        topics: 'Topicul',
        literature: 'text text text',
        videos: 'video',
        assignments: 'ceva',
        teaser: 'teaser teaser'
      }],
      }, {
      // _id: '45434dasv41241431vcx3242352a',
      academy: 'Academia Bucuresti',
      year: 2016,
      title: 'Titlu Academiei2',
      education: 'Computer Science mdfq',
      lecturer: 'Laras Heron',
      // owner: '45434dasv41241431vcx3242352b',
      objectives: 'Learn something',
      })
      .then(() => {
        console.log('finishing populating syllabuses');
      });
    });


User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      _id: '214321zds232123132sad1',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id: '214321xzds232123132sad2',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
