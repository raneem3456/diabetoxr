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
        Schema::create('lifestyle_trackings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('patient_id');  // المفتاح الخارجي للمريض
            $table->date('date');                      // تاريخ التسجيل
            $table->float('sleep_hours');              // عدد ساعات النوم
            $table->integer('steps_count');            // عدد الخطوات
            $table->text('notes')->nullable();         // ملاحظات إضافية
            $table->timestamps();

            $table->foreign('patient_id')->references('user_id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lifestyle_trackings');
    }
};
