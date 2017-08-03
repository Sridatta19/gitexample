
import { Router } from 'express';
import request from 'request';
import _ from 'ramda'

const searchRepos = (req, res, next) => {
  const name = req.params.name
  const options = {
    url: `https://api.github.com/search/repositories?q=${name}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-agent': 'node.js'
    }
  }
  request(options, function(err, response, body){
    if (err) {
      res.status(500).send('Error Occurred')
      return;
    }
    const responseBody = JSON.parse(body);
    const repositories = _.filter(_.propEq('full_name', name), responseBody.items)
    res.status(200).json({ repositories })
  })
}

const router = Router();
router.route('/repositories/search/:name').get(searchRepos);

module.exports = router;
