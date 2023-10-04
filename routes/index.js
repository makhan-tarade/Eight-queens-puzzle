var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const queen = {};
  res.render('index', { queen });
});

router.get('/:id', (req, res) => {
  let queen = {};
  if (req.params.id == 1) {
    queen = {
      'x0y0': 'queen queen-1 pressure',
      'x1y4': 'queen queen-2 pressure',
      'x2y7': 'queen queen-3 pressure',
      'x3y5': 'queen queen-4 pressure',
      'x4y2': 'queen queen-5 pressure',
      'x5y6': 'queen queen-6 pressure',
      'x6y1': 'queen queen-7 pressure',
      'x7y3': 'queen queen-8 pressure',
    }
    
  }  else if (req.params.id == 2) {
    queen = {
      'x0y2': 'queen queen-1 pressure',
      'x1y6': 'queen queen-2 pressure',
      'x2y1': 'queen queen-3 pressure',
      'x3y7': 'queen queen-4 pressure',
      'x4y5': 'queen queen-5 pressure',
      'x5y3': 'queen queen-6 pressure',
      'x6y0': 'queen queen-7 pressure',
      'x7y4': 'queen queen-8 pressure',
    }
    
  } else if (req.params.id == 3) {
    queen = {
      'x0y2': 'queen queen-1 pressure',
      'x1y7': 'queen queen-2 pressure',
      'x2y3': 'queen queen-3 pressure',
      'x3y6': 'queen queen-4 pressure',
      'x4y0': 'queen queen-5 pressure',
      'x5y5': 'queen queen-6 pressure',
      'x6y1': 'queen queen-7 pressure',
      'x7y4': 'queen queen-8 pressure',
    }
    
  } else if (req.params.id == 4) {
    queen = {
      'x0y3': 'queen queen-1 pressure',
      'x1y0': 'queen queen-2 pressure',
      'x2y4': 'queen queen-3 pressure',
      'x3y7': 'queen queen-4 pressure',
      'x4y1': 'queen queen-5 pressure',
      'x5y6': 'queen queen-6 pressure',
      'x6y2': 'queen queen-7 pressure',
      'x7y5': 'queen queen-8 pressure',
    }    
    
  } else if (req.params.id == 5) {
    queen = {
      'x0y3': 'queen queen-1 pressure',
      'x1y0': 'queen queen-2 pressure',
      'x2y4': 'queen queen-3 pressure',
      'x3y7': 'queen queen-4 pressure',
      'x4y5': 'queen queen-5 pressure',
      'x5y2': 'queen queen-6 pressure',
      'x6y6': 'queen queen-7 pressure',
      'x7y1': 'queen queen-8 pressure',
    }    
    
  } else if (req.params.id == 6) {
    queen = {
      'x0y3': 'queen queen-1 pressure',
      'x1y1': 'queen queen-2 pressure',
      'x2y7': 'queen queen-3 pressure',
      'x3y4': 'queen queen-4 pressure',
      'x4y6': 'queen queen-5 pressure',
      'x5y0': 'queen queen-6 pressure',
      'x6y2': 'queen queen-7 pressure',
      'x7y5': 'queen queen-8 pressure',
    }   
    
  } else if (req.params.id == 7) {
    queen = {
      'x0y4': 'queen queen-1 pressure',
      'x1y0': 'queen queen-2 pressure',
      'x2y7': 'queen queen-3 pressure',
      'x3y3': 'queen queen-4 pressure',
      'x4y1': 'queen queen-5 pressure',
      'x5y6': 'queen queen-6 pressure',
      'x6y2': 'queen queen-7 pressure',
      'x7y5': 'queen queen-8 pressure',
    }
  } else if (req.params.id == 8) {
    queen = {
      'x0y5': 'queen queen-1 pressure',
      'x1y2': 'queen queen-2 pressure',
      'x2y6': 'queen queen-3 pressure',
      'x3y1': 'queen queen-4 pressure',
      'x4y3': 'queen queen-5 pressure',
      'x5y7': 'queen queen-6 pressure',
      'x6y0': 'queen queen-7 pressure',
      'x7y4': 'queen queen-8 pressure',
    }
  } else if (req.params.id == 9) {
    queen = {
      'x0y5': 'queen queen-1 pressure',
      'x1y3': 'queen queen-2 pressure',
      'x2y1': 'queen queen-3 pressure',
      'x3y7': 'queen queen-4 pressure',
      'x4y4': 'queen queen-5 pressure',
      'x5y6': 'queen queen-6 pressure',
      'x6y0': 'queen queen-7 pressure',
      'x7y2': 'queen queen-8 pressure',
    }
  } else if (req.params.id == 10) {
    queen = {
      'x0y6': 'queen queen-1 pressure',
      'x1y1': 'queen queen-2 pressure',
      'x2y5': 'queen queen-3 pressure',
      'x3y2': 'queen queen-4 pressure',
      'x4y0': 'queen queen-5 pressure',
      'x5y3': 'queen queen-6 pressure',
      'x6y7': 'queen queen-7 pressure',
      'x7y4': 'queen queen-8 pressure',
    }
  } else if (req.params.id == 11) {
    queen = {
      'x0y6': 'queen queen-1 pressure',
      'x1y3': 'queen queen-2 pressure',
      'x2y1': 'queen queen-3 pressure',
      'x3y7': 'queen queen-4 pressure',
      'x4y5': 'queen queen-5 pressure',
      'x5y0': 'queen queen-6 pressure',
      'x6y2': 'queen queen-7 pressure',
      'x7y4': 'queen queen-8 pressure',
    }
  }
  res.render('index', { queen });
});

module.exports = router;
