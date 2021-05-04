import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {FeatureCard} from "./FeatureCard"
import {getFeatureByCharacterId, deleteFeature} from '../../modules/FeatureModule'