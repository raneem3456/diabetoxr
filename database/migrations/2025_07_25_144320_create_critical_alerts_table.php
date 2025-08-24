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
        Schema::create('critical_alerts', function (Blueprint $table) {
            $table->id('alert_id');
            $table->unsignedBigInteger('patient_id');
            $table->enum('alert_type', ['low_blood_sugar', 'high_blood_sugar', 'missed_dose', 'other']);
            $table->text('description')->nullable();
            $table->dateTime('alert_time');
            $table->timestamps();

            $table->foreign('patient_id')->references('patient_id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('critical_alerts');
    }
};
