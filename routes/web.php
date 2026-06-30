<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('/peta-evakuasi', function () {
    return Inertia::render('EvacuationMap');
});

Route::get('/sop-panduan', function () {
    return Inertia::render('SopDirectory');
});

Route::get('/komplain', function () {
    return Inertia::render('Complaint');
});

Route::get('/formulir', function () {
    return Inertia::render('FormDirectory');
});

Route::get('/struktur-organisasi', function () {
    return Inertia::render('OrgStructure');
});

Route::get('/berita/{id}', function ($id) {
    return Inertia::render('NewsDetail', [
        'newsId' => $id
    ]);
});
