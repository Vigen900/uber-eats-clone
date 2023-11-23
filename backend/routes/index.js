var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/restaurants', function(req, res, next) {
  res.send([
    {
        name:'McDonald-New',
        icon:'https://www.shutterstock.com/image-vector/logo-famous-identity-city-style-260nw-2275339803.jpg',
        deliveryTime:'10-20 min',
        id:1
    },
    {
        name:'KFC',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hZDYxMTZkNS1jZTkzLTQxNzQtOWQ3NC02ZjM2MGI1YWYxZTQuanBlZw==',
        deliveryTime:'5-10 min',
        id:2
    },
    {
        name:'Pizza',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWRhMjEzYWM3MWYwM2M0NTQwN2ZhZWNiYTRmOTg1ZmEvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==',
        deliveryTime:'30-45 min',
        id:3
    }
]);
});


router.get('/products', function(req, res, next) {
  res.send([
    {
        name:'McDouble® Comes With-2',
        icon:'https://tb-static.uber.com/prod/image-proc/processed_images/6382f13784f101e0f7c56554f2ac6cbc/a19bb09692310dfd41e49a96c424b3a6.jpeg',
        deliveryTime:'$ 2.30  •  150 cal.',
        id:1,
        count:1,
        price:900,
    },
    {
        name:'McDouble® nugeets',
        icon:'https://tb-static.uber.com/prod/image-proc/processed_images/9662ab58e4baf79bd8e5185d42d43f00/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        deliveryTime:'$ 3.30  •  150 cal.',
        id:2,
        count:2,
        price:150,
    },
    {
        name:'Hash Browns',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTQ5MzY1OGRjNTliM2RmODZlZDk0MmM3ODM4ZmNiNjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        deliveryTime:'$ 3.19  •  150 cal.',
        id:3,
        count:3,
        price:390,
    },
    {
        name:'Sausage McMuffin®',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMmExYzIyM2Q0NzRkYjg2OGY5MzJiZDJhMDRlZjczYWUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        deliveryTime:'$ 1.19  •  270 cal',
        id:4,
        count:4,
        price:400,
    },
    {
        name:'Hotcakes and Sausage',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTQ5MzY1OGRjNTliM2RmODZlZDk0MmM3ODM4ZmNiNjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        deliveryTime:'$ 6.19  •  780 cal.',
        id:5,
        count:5,
        price:200,
    },
    {
        name:'Sausage Burrito',
        icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjk3YmNkMWZkZWY1OWUzYWUyNTEyNWFmMGM5M2NlYjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        deliveryTime:'$ 3.40 •  380 cal.',
        id:6,
        count:6,
        price:100,
    }
]);
});


router.get('/categories', function(req, res, next) {
    res.send([
        {
            name: "Hot-Deals",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png',
            categoryId: 1 
        },
        {
            name: "Grocery",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png',
            categoryId: 1 
        },
        {
            name: "Convenience",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png',
            categoryId: 1 
        },
        {
            name: "Coffee and tea",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png',
            categoryId: 1 
        },
        {
            name: "Retail",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
            categoryId: 1 
        },        {
            name: "Alcohol",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png',
            categoryId: 1 
        },        {
            name: "Pharmacy",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png',
            categoryId: 1 
        },        {
            name: "Baby",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
            categoryId: 1 
        },        {
            name: "Pet supplies",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png',
            categoryId: 1 
        },        
        {
            name: "Flowers",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png',
            categoryId: 1 
        },
        {
            name: "Specialty Foods",
            icon: 'https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png',
            categoryId: 1 
        },
        {
            name: "Electronics",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/electronics.png',
            categoryId: 1 
        },
        {
            name: "Best overall",
            icon: 'https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png',
            categoryId: 1 
        }
    ]);
  });
module.exports = router;
