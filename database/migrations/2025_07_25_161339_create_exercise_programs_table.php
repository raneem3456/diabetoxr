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
        Schema::create('exercise_programs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('coach_id');
            $table->unsignedBigInteger('patient_id');

            $table->string('title');
            $table->text('description')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();

            $table->timestamps();

            // تصحيح مراجع العلاقات حسب اسم الحقل الأساسي في جدول users
            $table->foreign('coach_id')->references('user_id')->on('users')->onDelete('cascade');
            $table->foreign('patient_id')->references('user_id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercise_programs');
    }
};
