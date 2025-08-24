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
        Schema::create('consultation_requests', function (Blueprint $table) {
            $table->id('request_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('doctor_id');

            $table->dateTime('requested_at');
            $table->dateTime('scheduled_for')->nullable();
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');

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
        Schema::dropIfExists('consultation_requests');
    }
};
