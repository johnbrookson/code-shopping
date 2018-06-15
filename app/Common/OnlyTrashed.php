<?php
/**
 * Created by PhpStorm.
 * User: João
 * Date: 08/06/2018
 * Time: 17:32
 */

namespace CodeShopping\Common;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait OnlyTrashed
{
    protected function onlyTrashedIfRequested(Request $request, Builder $query)
    {
        if ($request->get('trashed') == 1) {
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}