<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('support_group_members', function (Blueprint $table) {
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('patient_id');
            $table->timestamp('joined_at')->nullable();

            $table->foreign('group_id')->references('group_id')->on('support_groups')->onDelete('cascade');
            $table->foreign('patient_id')->references('patient_id')->on('patients')->onDelete('cascade');

            $table->primary(['group_id', 'patient_id']); // المفتاح الأساسي مركب
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('support_group_members');
    }
};
