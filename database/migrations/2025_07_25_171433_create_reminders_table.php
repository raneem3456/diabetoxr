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
        Schema::create('reminders', function (Blueprint $table) {
            $table->id('reminder_id');
            $table->unsignedBigInteger('patient_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->dateTime('reminder_time');
            $table->enum('type', ['medication', 'glucose_check', 'appointment', 'other']);
            $table->timestamps();

            $table->foreign('patient_id')->references('user_id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reminders');
    }
};
