<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required|string|max:20',
            'role' => 'required|in:nutritionist,doctor,coach',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password_hash' => bcrypt($request->password),
            'phone'    => $request->phone,
            'role'     => $request->role,
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user'    => $user
        ], 201);
    }
}
