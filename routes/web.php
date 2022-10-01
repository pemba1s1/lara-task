<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('PublicApi');
})->name('publicApi');

Route::get('/employee', function () {
    return Inertia::render('Employee');
})->name('employee');


Route::get('/employee/add',function(){
    return Inertia::render('AddEmployee');
})->name('createEmployee');

Route::get('/employee/view',function(){
    return Inertia::render('ViewEmployee');
})->name('viewEmployee');

Route::get('/employee/edit', function(){
    return Inertia::render('EditEmployee',[
        'id' => "lets go"
    ]);
})->name('editEmployee');

