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
        Schema::create('exercises', function (Blueprint $table) {
            $table->id(); // exercise_id
            $table->unsignedBigInteger('exercise_program_id'); // FK لجدول exercise_programs
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('duration_minutes')->nullable(); // مدة التمرين بالدقائق (اختياري)
            $table->timestamps();

            // علاقة المفتاح الخارجي
            $table->foreign('exercise_program_id')->references('id')->on('exercise_programs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercises');
    }
};
