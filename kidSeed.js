var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/beGood', function() {
  // Load Mongoose models
  seeder.loadModels(['./models/agent.js']);
  // Clear specified collections
  seeder.clearModels(['Agent'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data);
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Kid',
    'documents': [
      {
        'kidName': 'Jim',
        'color': 'green',
        'day1': 2,
        'day2': 4,
        'day3': 2,
        'day4': 5,
        'day5': 0,
        'day6': 1,
        'day7': 2
      },
    ]
  }
];
