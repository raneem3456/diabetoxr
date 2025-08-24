<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;

    protected $primaryKey = 'meal_plan_id';

    protected $fillable = [
        'patient_id',
        'nutritionist_id',
        'start_date',
        'end_date',
        'meal_schedule',
        'notes',
    ];

    protected $casts = [
        'meal_schedule' => 'array',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function nutritionist()
    {
        return $this->belongsTo(Nutritionist::class);
    }
}
