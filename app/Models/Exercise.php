<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = [
        'exercise_program_id',
        'name',
        'description',
        'duration_minutes',
    ];

    // العلاقة مع جدول exercise_programs
    public function exerciseProgram()
    {
        return $this->belongsTo(ExerciseProgram::class);
    }
}
