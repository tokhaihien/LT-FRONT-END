<?php
header('Content-Type:application/json; charset=utf8');
header('Access-Control-Allow-Origin: *');

$product_type = [
    [
        'product_type' => 'Loai san pham 1',
        'lst_product' => [
            [
                'url' => "img/featured/feature-1.jpg",
                'name' => "Sản phẩm 1",
                'price' => "30.000"
            ],
            [
                'url' => "img/featured/feature-2.jpg",
                'name' => "Sản phẩm 2",
                'price' => "50.000"
            ],
            [
                'url' => "img/featured/feature-3.jpg",
                'name' => "Sản phẩm 3",
                'price' => "10.000"
            ],
            [
                'url' => "img/featured/feature-4.jpg",
                'name' => "Sản phẩm 4",
                'price' => "15.000"
            ]
        ]
    ],
    [
        'product_type' => 'Loai san pham 2',
        'lst_product' => [
            [
                'url' => "img/featured/feature-5.jpg",
                'name' => "Sản phẩm 5",
                'price' => "199.000"
            ],
            [
                'url' => "img/featured/feature-6.jpg",
                'name' => "Sản phẩm 6",
                'price' => "123.000"
            ],
            [
                'url' => "img/featured/feature-7.jpg",
                'name' => "Sản phẩm 7",
                'price' => "14.000"
            ],
            [
                'url' => "img/featured/feature-8.jpg",
                'name' => "Sản phẩm 8",
                'price' => "20.000"
            ]
        ]
    ],
    [
        'product_type' => 'Loai san pham 3',
        'lst_product' => [
            [
                'url' => "img/featured/feature-5.jpg",
                'name' => "Sản phẩm 9",
                'price' => "199.000"
            ],
            [
                'url' => "img/featured/feature-6.jpg",
                'name' => "Sản phẩm 10",
                'price' => "123.000"
            ],
            [
                'url' => "img/featured/feature-7.jpg",
                'name' => "Sản phẩm 11",
                'price' => "14.000"
            ],
            [
                'url' => "img/featured/feature-8.jpg",
                'name' => "Sản phẩm 12",
                'price' => "20.000"
            ]
        ]
    ]
];
echo  json_encode($product_type);
