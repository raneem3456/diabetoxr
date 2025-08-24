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
        Schema::create('medical_notes', function (Blueprint $table) {
            $table->id('note_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('doctor_id');
            $table->dateTime('note_date');
            $table->text('content');
            $table->timestamps();

            $table->foreign('patient_id')->references('user_id')->on('patients')->onDelete('cascade');
            $table->foreign('doctor_id')->references('user_id')->on('doctors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_notes');
    }
};
