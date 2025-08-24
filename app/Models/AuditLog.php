<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    use HasFactory;

    protected $primaryKey = 'log_id';

    public $timestamps = false; // لأن عندنا حقل timestamp مخصص

    protected $fillable = [
        'user_id',
        'action',
        'target_table',
        'target_id',
        'timestamp',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
