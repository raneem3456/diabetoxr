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
        Schema::create('educational_contents', function (Blueprint $table) {
            $table->id('content_id');
            $table->string('title');
            $table->text('content');
            $table->enum('content_type', ['video', 'article', 'pdf', 'other'])->nullable();
            $table->enum('language', ['en', 'ar', 'other'])->default('en');

            $table->unsignedBigInteger('admin_id');
            $table->foreign('admin_id')->references('admin_id')->on('admins')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('educational_contents');
    }
};
