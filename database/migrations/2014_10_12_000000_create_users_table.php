<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_id'); // Primary Key
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone', 20);
            $table->string('password_hash');
            $table->enum('role', ['patient', 'doctor', 'nutritionist', 'coach', 'family', 'admin']);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('last_login')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
