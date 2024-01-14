<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class ChannelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'teacher_image' => 'required',
            'channel_image' => 'required',
            'about' => 'required',
            'age' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'competence' => 'required',
            'gender' => 'required',
            'cv' => 'required',
            'perthday' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'data'   => null,
            'message'   =>  $validator->errors(),
            'status'      => JsonResponse::HTTP_BAD_REQUEST
        ]));
    }




    public function messages(): array
    {
        return [
            'name.required' => 'A title is required',
            'teacher_image.required' => 'A image is required',
            'channel_image.required' => 'A video is required',
            'about.required' => 'A about is required',
        ];
    }
}
