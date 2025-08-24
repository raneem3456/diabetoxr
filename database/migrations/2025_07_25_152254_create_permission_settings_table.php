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
        Schema::create('permission_settings', function (Blueprint $table) {
            $table->id('permission_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('family_member_id');

            $accessLevels = ['none', 'read', 'write'];

            $table->enum('glucose_access', $accessLevels)->default('none');
            $table->enum('medication_access', $accessLevels)->default('none');
            $table->enum('appointment_access', $accessLevels)->default('none');
            $table->enum('emergency_access', $accessLevels)->default('none');
            $table->enum('lifestyle_access', $accessLevels)->default('none');
            $table->enum('notes_access', $accessLevels)->default('none');
            $table->enum('messages_access', $accessLevels)->default('none');

            // تعريف الفوريجن كي بشكل صحيح حسب أسماء الأعمدة
            $table->foreign('patient_id')->references('patient_id')->on('patients')->onDelete('cascade');
            $table->foreign('family_member_id')->references('family_member_id')->on('family_members')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permission_settings');
    }
};
