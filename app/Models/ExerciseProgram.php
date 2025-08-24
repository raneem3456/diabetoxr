<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciseProgram extends Model
{
    use HasFactory;

    protected $table = 'exercise_programs'; // اسم الجدول

    protected $fillable = [
        'player_id',
        'coach_id',
        'title',
        'description',
        'start_date',
        'end_date'
    ];

    // العلاقة مع اللاعب
    public function player()
    {
        return $this->belongsTo(User::class, 'player_id');
    }

    // العلاقة مع الكوتش
    public function coach()
    {
        return $this->belongsTo(User::class, 'coach_id');
    }

    // العلاقة مع التمارين المرتبطة بهذا البرنامج
    public function exercises()
    {
        return $this->hasMany(Exercise::class, 'program_id');
    }
}
