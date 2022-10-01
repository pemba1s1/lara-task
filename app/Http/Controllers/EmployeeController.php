<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Validator;
use DataTables;

class EmployeeController extends Controller
{
    //
    public function index()
    {
        $employees = Employee::all();
        return Datatables::of($employees)
            ->make(true);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name'=> 'required',
            'address' => 'required',
            'dob' => 'required',
            'gender' => 'required',
            'joined' => 'required',
            'designation' => 'required',
        ]);
        if($validator->fails()){
             return response()->json([
                "success" => false,
                "message" => $validator->errors(),
            ],400);  
        }
        $employee = Employee::create($input);
        return response()->json([
            "success" => true,
            "message" => "Employee created successfully.",
            "data" => $employee
        ]);
    }

    public function show($id)
    {
        $employee = Employee::find($id);
        if (is_null($employee)) {
            return response()->json([
                "success" => false,
                "message" => 'Employee Not Found',
            ],400);  
        }
        return response()->json([
            "success" => true,
            "message" => "Employee retrieved successfully.",
            "data" => $employee
        ]);
    }

    public function update(Request $request, Employee $employee)
    {
        $input = $request->all()["body"];
        $validator = Validator::make($input, [
            'name'=> 'required',
            'address' => 'required',
            'dob' => 'required',
            'gender' => 'required',
            'joined' => 'required',
            'designation' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                "success" => false,
                "message" => $validator->errors(),
            ],400);   
        }
        $employee->name = $input['name'];
        $employee->address = $input['address'];
        $employee->dob = $input['dob'];
        $employee->gender = $input['gender'];
        $employee->joined = $input['joined'];
        $employee->designation = $input['designation'];
        $employee->save();
        return response()->json([
            "success" => true,
            "message" => "Employee updated successfully.",
            "data" => $employee
        ]);
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json([
            "success" => true,
            "message" => "Employee deleted successfully.",
            "data" => $employee
        ]);
    }
    

}
