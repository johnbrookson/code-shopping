<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\UserRequest;
use CodeShopping\Http\Resources\UserResource;
use Illuminate\Database\Eloquent\Builder;
use CodeShopping\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $query = User::query();
        $query = $this->onlyTrashedIfRequested($request, $query);
        $users = $query->paginate(10);
        return UserResource::collection($users);
    }


    public function store(UserRequest $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $user =  User::create($data);
        $user->refresh();
        return new UserResource($user);
    }


    public function show(User $user)
    {
        return new UserResource($user);
    }


    public function update(UserRequest $request, User $user)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);
        $user->fill($data);
        $user->save();

        return new UserResource($user);
    }


    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([], 204);
    }

    private function onlyTrashedIfRequested(Request $request, Builder $query)
    {
        if ($request->get('trashed') == 1) {
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}
