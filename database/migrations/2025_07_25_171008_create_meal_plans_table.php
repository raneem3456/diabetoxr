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
        Schema::create('meal_plans', function (Blueprint $table) {
            $table->id('meal_plan_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('nutritionist_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->json('meal_schedule');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('patient_id')->references('user_id')->on('patients')->onDelete('cascade');
            $table->foreign('nutritionist_id')->references('user_id')->on('nutritionists')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meal_plans');
    }
};
