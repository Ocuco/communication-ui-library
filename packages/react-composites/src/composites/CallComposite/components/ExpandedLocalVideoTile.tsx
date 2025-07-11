// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useEffect } from 'react';
import { mergeStyles, Stack } from '@fluentui/react';
import {
  StreamMedia,
  VideoGalleryStream,
  VideoTile,
  VideoStreamOptions,
  CreateVideoStreamViewResult
} from '@internal/react-components';
import {
  containerStyles,
  overlayBackgroundStyles,
  overlayContentStyles,
  videoTileStyles
} from '../styles/ExpandedLocalVideoTile.styles';

const onRenderEmptyPlaceholder = (): JSX.Element => <></>;

const localVideoViewOptions = {
  scalingMode: 'Crop',
  isMirrored: true
} as VideoStreamOptions;

/**
 * @private
 */
export interface ExpandedLocalVideoTileProps {
  localParticipantVideoStream: VideoGalleryStream;
  onCreateLocalStreamView?: (options?: VideoStreamOptions) => Promise<void | CreateVideoStreamViewResult>;
  overlayContent?: JSX.Element;
}

/**
 * @private
 */
export const ExpandedLocalVideoTile = (props: ExpandedLocalVideoTileProps): JSX.Element => {
  const videoStream = props.localParticipantVideoStream;
  const isVideoReady = videoStream?.isAvailable ?? false;
  const renderElement = videoStream?.renderElement;

  useEffect(() => {
    if (videoStream && isVideoReady) {
      props.onCreateLocalStreamView?.(localVideoViewOptions).catch((err) => console.log('Can not render video', err));
    }
  }, [isVideoReady, videoStream, props, renderElement]);
  return (
    <Stack horizontalAlign="center" verticalAlign="center" styles={containerStyles} grow>
      <VideoTile
        styles={videoTileStyles}
        renderElement={renderElement ? <StreamMedia videoStreamElement={renderElement} /> : undefined}
        onRenderPlaceholder={onRenderEmptyPlaceholder}
      >
        {props.overlayContent && (
          <>
            <Stack className={mergeStyles(overlayBackgroundStyles(isVideoReady))} />
            <Stack horizontalAlign="center" verticalAlign="center" className={mergeStyles(overlayContentStyles)}>
              {props.overlayContent}
            </Stack>
          </>
        )}
      </VideoTile>
    </Stack>
  );
};
