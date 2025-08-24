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
        Schema::create('glucose_readings', function (Blueprint $table) {
            $table->id('reading_id');
            $table->unsignedBigInteger('patient_id');
            $table->float('reading_value');
            $table->dateTime('reading_time');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('patient_id')->references('patient_id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('glucose_readings');
    }
};
