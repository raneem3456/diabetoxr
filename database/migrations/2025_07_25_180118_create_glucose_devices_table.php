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
        Schema::create('glucose_devices', function (Blueprint $table) {
            $table->id('device_id');
            $table->string('model', 100);
            $table->string('manufacturer', 100);
            $table->enum('connection_type', ['bluetooth', 'usb', 'wifi', 'other']);
            $table->string('device_type', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('glucose_devices');
    }
};
