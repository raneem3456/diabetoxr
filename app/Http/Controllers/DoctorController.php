<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'license_number' => 'required|string|max:255',
            'accreditation_authority' => 'nullable|string|max:255',
            'specialization' => 'nullable|string|max:255',
            'notes' => 'nullable|string',

        ]);

        $doctor = Doctor::create($validatedData);

        return response()->json([
            'message' => 'Doctor registered successfully',
            'doctor' => $doctor
        ]);
    }
}
