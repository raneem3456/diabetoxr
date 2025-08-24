<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id('patient_id');
            $table->unsignedBigInteger('user_id');
            $table->enum('diabetes_type', ['type1', 'type2', 'gestational', 'other'])->nullable();
            $table->date('diagnosis_date')->nullable();
            $table->float('height')->nullable();
            $table->float('weight')->nullable();
            $table->text('medical_history')->nullable();
            $table->float('hba1c')->nullable();

            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
