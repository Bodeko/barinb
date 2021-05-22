import { createAction } from '@ngrx/store';

import { Building, BuildingEntity, ChangedBuilding, NewBuilding } from '@app/buildings/common';
import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';

export const loadBuildings = createAction('[Building] Load Buildings');

export const loadBuildingsSuccess = createAction('[Building] Load Buildings Success', payload<Building[]>());

export const loadBuildingsFailure = createAction('[Building] Load Buildings Failure', payload<Record<string, any>>());

export const clearBuildings = createAction('[Building] Clear Buildings');

export const clearBuildingsRooms = createAction('[Building] Clear Buildings Rooms');

export const clearBuildingsRoomsCancel = createAction('[Building] Clear Buildings Cancel');

export const clearBuildingsRoomsSuccess = createAction('[Building] Clear Buildings Success', payload<Building[]>());

export const clearBuildingsRoomsFailure = createAction('[Building] Clear Buildings Failure', payload<Record<string, any>>());

export const removeBuilding = createAction('[Building] Remove Building', payload<Entity>());

export const removeBuildingCancel = createAction('[Building] Remove Building Cancel');

export const removeBuildingSuccess = createAction('[Building] Remove Building Success', payload<Entity>());

export const removeBuildingFailure = createAction('[Building] Remove Building Failure', payload<Record<string, any> & Entity>());

export const addBuilding = createAction('[Building] Remove Building', payload<NewBuilding>());

export const addBuildingCancel = createAction('[Building] Remove Building Cancel');

export const addBuildingSuccess = createAction('[Building] Remove Building Success', payload<BuildingEntity>());

export const addBuildingFailure = createAction('[Building] Remove Building Failure', payload<Record<string, any>>());

export const changeBuilding = createAction('[Building] Change Building', payload<ChangedBuilding>());

export const changeBuildingCancel = createAction('[Building] Change Building Cancel');

export const changeBuildingSuccess = createAction('[Building] Change Building Success', payload<ChangedBuilding>());

export const changeBuildingFailure = createAction('[Building] Change Building Failure', payload<Record<string, any>>());
