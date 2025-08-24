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
        Schema::create('rewards', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('patient_id');  // المريض الذي حصل على المكافأة
            $table->text('description');               // وصف المكافأة
            $table->integer('points');                  // عدد النقاط
            $table->timestamp('awarded_at')->useCurrent();  // تاريخ منح المكافأة

            $table->timestamps();

            $table->foreign('patient_id')->references('user_id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rewards');
    }
};
